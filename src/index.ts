type Footer = string | {
    text: string, iconURL?: string
}

const footerA: Footer = " administração";

const footerB = "administração" as Footer;

const footerC = "administração" satisfies Footer;