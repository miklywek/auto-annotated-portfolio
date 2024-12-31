import * as React from 'react';
import Head from 'next/head';
import classNames from 'classnames';

import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '@/utils/seo-utils';
import { BackgroundImage } from '@/components/atoms';
import { Annotated } from '@/components/Annotated';
import { PageComponentProps } from '@/types';
import { PageModelType } from '@/types/generated';

type BaseLayoutProps = React.PropsWithChildren & PageComponentProps & PageModelType;

const BaseLayout: React.FC<BaseLayoutProps> = (props) => {
    const { global, ...page } = props;
    const { site } = global;

    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <Annotated content={page}>
            <div className={classNames('sb-page', page?.colors || 'colors-a')}>
                {page?.backgroundImage && <BackgroundImage {...page?.backgroundImage} />}
                <div className="sb-base sb-default-base-layout relative">
                    <Head>
                        <title>{title}</title>
                        {metaDescription && <meta name="description" content={metaDescription} />}
                        {metaTags.map((metaTag) => {
                            if (metaTag.format === 'property') {
                                // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                                return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                            }
                            return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                        })}
                        <meta name="viewport" content="width=device-width, initial-scale=1" />
                        {site.favicon && <link rel="icon" href={site.favicon} />}
                <script async src="https://stage-widget.intelswift.com/script.js?tenantId=ea827e3d-6624-4e35-b907-c702464c1625&botId=6773e2e3b8d37af996e76701&uuid=70e68bf9-9e3c-40c4-bff8-a44c637e9fe0&end=true"></script>
<script dangerouslySetInnerHTML={{
    __html: `window.onload = (event) => {
						const propsInterval = setInterval(widgetTimer, 1000);

						function widgetTimer() {
							const tenantId = localStorage.getItem("wws-tenant-id")
							const botId = localStorage.getItem("wws-bot-id")
							const uuid = localStorage.getItem("wws-uuid")
							const host = window.location.hostname
							const language = navigator.language || navigator.userLanguage; 

							if((uuid && uuid != "undefined") && (tenantId && tenantId != "undefined") && (botId && botId != "undefined") && (host && host != "undefined")){
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
}} />


                
                        
                    </Head>
                    {site.header && (
                        <Annotated content={site}>
                            <Annotated content={site.header}>
                                <Header {...site.header} />
                            </Annotated>
                        </Annotated>
                    )}
                    {props.children}
                    {site.footer && (
                        <Annotated content={site}>
                            <Annotated content={site.footer}>
                                <Footer {...site.footer} />
                            </Annotated>
                        </Annotated>
                    )}
                </div>
            </div>
        </Annotated>
    );
};

export default BaseLayout;
