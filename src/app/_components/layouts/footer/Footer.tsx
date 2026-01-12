"use client";
// import FooterBg from '@/public/images/footer-bg.jpg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container flex ">
                <section>
                </section>

                <section>
                    <h6 className="heading-senary">Get in Touch</h6>
                    <ul className="list flex">
                        <li className="list_item">
                            <a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </li>
                        <li className="list_item">
                            <a href="mailto:your@email.com">Mail</a>
                        </li>
                    </ul>
                </section>

            </div>
            <style jsx>
                {
                    `
                    .footer{
                        padding: 15% 5%;
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
                        border-right: 1px solid var(--color-text);
                        padding-right:1.6rem;
                    }
                    `
                }
            </style>
        </footer>
    )
}

export default Footer;