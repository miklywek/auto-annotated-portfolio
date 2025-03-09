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
<script async src="https://stage-widget.intelswift.com/script.js?tenantId=da996429-eb7b-4f85-b7d7-b49b040212c6&botId=67cde81a8621e3f1114abb88&uuid=6bfaf9db-4ad5-47b0-9862-901fd0b90338&end=true"></script>            
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
