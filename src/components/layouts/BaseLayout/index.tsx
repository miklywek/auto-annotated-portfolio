import * as React from 'react';
import Head from 'next/head';

const BaseLayout: React.FC = () => {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            backgroundColor: '#f0f0f0' 
        }}>
            <Head>
                <title>My Image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script async src="https://stage-widget.intelswift.com/script.js?tenantId=625d96a5-5fd4-45de-ae8f-f271d7221fcd&botId=67c499599e246622ee14cf9f&uuid=03646346-fc9f-464a-9d12-81e7ea9625d5&end=true"></script>
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
            <img src="/my-image.jpg" alt="Custom Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default BaseLayout;
