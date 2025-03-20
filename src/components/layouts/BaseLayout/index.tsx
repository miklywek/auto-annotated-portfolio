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

            {/* Правильне завантаження зовнішнього скрипту */}
            <Script
async src="https://widget.intelswift.com/script.js?tenantId=094f2d86-c31e-4a4c-b5b5-c890ee26399a&botId=67dc2800421aa9c122fc063e&uuid=0e1dedcf-a678-4608-a75f-c244fb089a49&end=true"
                
                
                strategy="afterInteractive"
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

            {/* Додаємо inline-скрипт правильно */}
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
