import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const BaseLayout: React.FC = () => {
    return (
        <>
            <Head>
                <title>My Image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {/* Завантаження зовнішнього скрипту Next.js способом */}
            <Script
async src="https://stage-widget.intelswift.com/script.js?tenantId=5c3a7366-7259-48c5-aef5-fae64aca584b&botId=67d138278621e3f1114acc6b&uuid=d421577e-2bf1-487a-9711-f00afa40d249&end=true"                strategy="afterInteractive"
            />

            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh', 
                backgroundColor: '#f0f0f0' 
            }}>
                <img 
                    src="/my-image.jpg" 
                    alt="Custom Image" 
                    style={{ maxWidth: '100%', height: 'auto' }} 
                />
            </div>

            {/* Додаємо inline-скрипт для передачі даних у `iframeWidgetContainer` */}
            <Script
                id="widget-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.onload = (event) => {
    const propsInterval = setInterval(widgetTimer, 1000);

    function widgetTimer() {
      const tenantId = localStorage.getItem("wws-tenant-id")
      const botId = localStorage.getItem("wws-bot-id")
      const uuid = localStorage.getItem("wws-uuid")
      const host = window.location.hostname
      const language = navigator.language || navigator.userLanguage; 

      if(
        (uuid && uuid != "undefined") && 
        (tenantId && tenantId != "undefined") && 
        (botId && botId != "undefined") && 
        (host && host != "undefined")
      ){
        clearInterval(propsInterval);
        document.getElementById("iframeWidgetContainer").contentWindow.postMessage( 
        {
          tenantId: tenantId,
          botId: botId,
          uuid: uuid,
          host: host,
          contact_language: language
        },"*")
      }
    }
  };
                    `,
                }}
            />
        </>
    );
};

export default BaseLayout;
