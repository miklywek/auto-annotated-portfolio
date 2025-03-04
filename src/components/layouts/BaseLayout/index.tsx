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
            <img src="/my-image.jpg" alt="Custom Image" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};

export default BaseLayout;
