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
                {/* Перший скрипт (async) */}
<script async src="https://stage-widget.intelswift.com/script.js?tenantId=edd30677-c5a4-4db7-a9e2-d2b7076a3e07&botId=67cc1f00ca1eece27c50d824&uuid=a82cdc57-4b9c-4806-a29b-392d1d3ddf6d&end=true"></script>            </Head>
            
            <img src="/my-image.jpg" alt="Custom Image" style={{ maxWidth: '100%', height: 'auto' }} />

            {/* Другий скрипт з dangerouslySetInnerHTML */}
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
                    `,
                }}
            />
        </div>
    );
};

export default BaseLayout;
