interface FooterData {
    text: string;
    iconURL?: string;
}

type Footer = string | FooterData;

const footerA: Footer = " administração";

const footerB = {} as FooterData;

const footerC = "administração" satisfies Footer;