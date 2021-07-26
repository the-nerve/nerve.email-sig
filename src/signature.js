import {signatureConfig, colors} from './config';

/*
  For overriding link colors forced by email clients: https://www.litmus.com/blog/how-to-remove-blue-links-in-html-emails/
  Dark Mode reference: https://www.litmus.com/blog/the-ultimate-guide-to-dark-mode-for-email-marketers/#
  Resource: Simple inline with: https://templates.mailchimp.com/resources/inline-css/
  Resource: Deep inline with: https://alter.email/
  Resource: Solid blog about email templates: https://www.smashingmagazine.com/2021/04/complete-guide-html-email-templates-tools/
  TODO: Use the JUICE Library to automatically generate new signatures: https://github.com/Automattic/juice
*/
export const signatures =  signatureConfig.people.map( ({firstName, lastName, role, avatar}) => `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">

        <style>

        * {
            margin: 0px;
            padding: 0px;
            border-spacing: 0px;
            border-collapse: collapse;
        }

        td {
            border-spacing: 0px;
            border-collapse: collapse;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
            color: ${colors.blue};
        }

        a {
            line-height: 0 !important;
        }

        u + #body a,
        a[x-apple-data-detectors],
        #MessageViewBody a,
        .linkOverride a,
        .link {
            color: ${colors.orange} !important;
            text-decoration: none !important;
            font-size: inherit !important;
            font-family: inherit !important;
            font-weight: inherit !important;
            line-height: 0 !important;
        }

        .linkOverride {
            color: ${colors.orange};
        }

        .wrapper {
            padding: 12px;
            width: 300px;
        }

        .avatar {
            padding-right: 12px;
        }

        .content {

        }


        .name {
            color: ${colors.blue};
            font-weight:bold;
            margin-bottom: 2px;
        }

        .role {
            color: ${colors.blue};
            font-size: 13px;
        }

        .logo {
            background-color: ${colors.darkBlue};
            padding: 12px;
            text-align: center;
            vertical-align: middle;
        }

        .logo-link {
            display: block;
            width: 100%;
        }

        .online-presence {
            border-top: 1px solid ${colors.lightGray};
            padding: 8px;
            text-align: center;
            vertical-align: middle;
        }

        .online-presence .item {
            display: inline-block;
            vertical-align: middle;
        }

        .online-presence .website {
            color: ${colors.orange};
            margin-right: 8px;
        }

        .online-presence .separator {
            color: ${colors.lightGray};
            margin-right: 4px;
        }

        .online-presence .social {
            margin-right: 4px;
        }

        .online-presence .link {
            display: block;
            line-height: 0;
        }

        .online-presence .social .icon {
            height: 18px;
            width: 18px;
        }

        @media (prefers-color-scheme: dark ) {
            .name {
                color: ${colors.xLightGray} !important;
            }
            .role {
                color: ${colors.lightGray} !important;
            }

            .online-presence {
                border-top: 1px solid ${colors.lightBlue} !important;
            }

            .online-presence .separator {
                color: ${colors.lightBlue} !important;
            }
        }

        @media screen {

            [data-ogsc] .name {
                color: ${colors.xLightGray} !important;
            }

            [data-ogsc] .role {
                color: ${colors.lightGray} !important;
            }

            [data-ogsc] .online-presence {
                border-top: 1px solid ${colors.lightBlue} !important;;
            }

            [data-ogsc] .online-presence .separator {
                color: ${colors.lightBlue} !important;
            }
        }

        </style>
    </head>
    <body>
        <table>
            <tbody>
                <tr>
                    <td class="wrapper">
                        <table>
                             <tr>

                                <td class="avatar">
                                    <img width="80" alt="${firstName} ${lastName}, ${role} at The Nerve" src="${avatar}" />
                                </td>

                                <td class="content">
                                    <table>
                                        <tbody>

                                            <tr>
                                                <td class="name">
                                                    ${firstName} ${lastName}
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="role">
                                                    ${role}
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>

                    <tr>
                        <td class="online-presence">
                            <span class="item website">
                                <span class="linkOverride">
                                    <a class="link" href="${signatureConfig.companyWebsite}" target="_blank" rel="noreferrer noopener">nervetheatre.org</a>
                                </span>
                            </span>
                            <span class="item separator">
                                |
                            </span>
                            <span class="item social">
                                <a class="link" href="${signatureConfig.social.facebook.link}" target="_blank" rel="noreferrer noopener">
                                    <img class="icon" alt="Facebook Icon" src="${signatureConfig.social.facebook.icon}" />
                                </a>
                            </span>
                            <span class="item social">
                                <a class="link" href="${signatureConfig.social.instagram.link}" target="_blank" rel="noreferrer noopener">
                                    <img alt="Instagram Icon" class="icon" src="${signatureConfig.social.instagram.icon}" />
                                </a>
                            </span>
                        </td>
                    </tr>

                    <tr>
                        <td class="logo linkOverride">
                            <a class="logo-link" href="${signatureConfig.companyWebsite}" target="_blank" rel="noreferrer noopener">
                                <img width="100" alt="The Nerve's company logo" src="${signatureConfig.companyLogo}" />
                            </a>
                        </td>
                    </tr>
                </tr>
            </tbody>
        </table>
    </body>
    </html>
`)