import type {Company} from "../typedefs";
import logo from "../../assets/images/logo-saschaklatt.dev.svg";

export const SaschaKlatt: Company = {
    name: "Sascha Klatt",
    city: "Mittweida",
    website: {
        href: "https://saschaklatt.dev",
        label: "saschaklat.dev",
    },
    email: "hello@saschaklatt.dev",
    address: {
        street: "Mittweidaer Str.",
        streetNumber: "102",
        zipCode: "09648",
        city: "Mittweida",
        country: "Germany",
    },
    vatId: "DE300904615",
    logo,
};
