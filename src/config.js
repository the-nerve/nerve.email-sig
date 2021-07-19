const signatureAssetURL = 'https://email-signatures.nervetheatre.org'

export const signatureConfig = {
    companyWebsite: 'https://nervetheatre.org',
    companyLogo: `${signatureAssetURL}/nerve-logo.png`,
    social: {
        'facebook': {
            link: 'https://www.facebook.com/nervetheatre',
            icon: `${signatureAssetURL}/facebook.png`,
        },
        'instagram': {
            link: 'https://www.instagram.com/nervetheatre/',
            icon: `${signatureAssetURL}/instagram.png`,
        },
        'tiktok': {
            link: '',
            icon: '',
        },
    },
    people: [
        {
            firstName: 'Jenna',
            lastName: 'Valyn',
            role: 'Co-Founder + Artistic Director',
            avatar: `${signatureAssetURL}/jenna.png`,
        },
        {
            firstName: 'Chris',
            lastName: 'Hahn',
            role: 'Co-Founder + Artistic Director',
            avatar: `${signatureAssetURL}/chris.png`,
        },
        {
            firstName: 'AJ',
            lastName: 'Breslin',
            role: 'Associate Director',
            avatar: `${signatureAssetURL}/aj.png`,
        }
    ]
}

export const colors = {
    orange: '#F25C05',
    blue: '#0C1E31',
    lightBlue: '#173A5F',
    darkBlue: '#07121D',
    lightGray: '#D6D6D9',
    xLightGray: '#F2F2F3'
}