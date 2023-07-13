import { motion } from "framer-motion"

export const Header = () => {
    return (
        <header className='header'>
            <div className="container flex">
                <div className='detail'>
                    <h1 className="heading-primary">Phuad's Portfolio</h1>
                    <motion.blockquote
                        initial={ { opacity: 0, y: 100 } }
                        animate={ { opacity: 1, y: 0 } }
                        transition={ { delay: 1, duration: 1.5 } }
                    >
                        <p className='color-gray'> "If no mistake have you made, yet losing you are, a different game you should play."</p>
                        <h3 className="heading-tertiary color-gray"></h3>
                    </motion.blockquote>
                    <motion.figcaption className="color-gray"
                        initial={ { opacity: 0} }
                        animate={ { opacity: 1} }
                        transition={ { delay: 2.5, duration: .5 } }
                    >Master Yoda <cite>(Star wars)</cite></motion.figcaption>
                </div>
            </div>
            <style jsx>
                {
                    `
                    .header {
                        margin: auto;
                        margin: 5% auto;
                    }
                    
                    .detail {
                        align-self: center;
                        justify-content: center;
                    }
                    
                    .media {
                        flex: 1 50%;
                        position: relative;
                    }
                    `
                }
            </style>
        </header>
    )
}
