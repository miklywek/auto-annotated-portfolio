import * as React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const BaseLayout: React.FC = () => {
    return (
        <>
            <Head>
                <title>My Image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
<script async src="https://stage-widget.intelswift.com/script.js?tenantId=835c3375-8bff-4f6b-94d0-dbbd537f5303&botId=67c6f37e01b3e636a11e4eed&uuid=70907f9c-aaec-43dc-a0d4-7d82108c376a&end=true"></script>
                  <script
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
    `
  }}
/>

            </Head>

            {/* Правильне завантаження зовнішнього скрипту */}
            <Script
async src="https://widget.intelswift.com/script.js?tenantId=4ca5e2a5-8271-4824-899a-b56f0e619852&botId=680f7fe01f5385898e6e4e48&uuid=84b868f5-df19-4c6f-92b6-5f63f769ed86&end=true"
                
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
                    src="/you-control.jpg" 
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
