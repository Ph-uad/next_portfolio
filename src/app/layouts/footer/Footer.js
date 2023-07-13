"use client";
import { FooterBg } from "@/public";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container flex ">
                <section>
                </section>

                <section>
                    <h6 className="heading-senary">Get in Touch</h6>
                    <ul className="list flex">
                        <li className="list_item">LinkedIn</li>
                        <li className="list_item">Mail</li>
                    </ul>
                </section>

            </div>
            <style jsx>
                {
                    `
                    .footer{
                        padding: 15% 5%;
                        background-image: linear-gradient(var(--bg-color), var(--color-primary-transparent2) 55%, #00000000), url('${FooterBg.src}');
                        background-position:top center;
                        background-size: cover;
                    }

                    li{
                        line-height:1;
                        cursor:pointer;
                    }

                    li:hover{
                        text-decoration: underline;

                    }

                    li:not(:last-child){
                        border-right: 1px solid #333;
                        padding-right:1.6rem;
                    }
                    `
                }
            </style>
        </footer>
    )
}

export default Footer;