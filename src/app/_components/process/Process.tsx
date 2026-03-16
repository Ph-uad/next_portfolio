import classes from './Process.module.css'

const Process = () => {

    return (

        <aside className='m-y'>
            <section className="section">
                <h2 className=" ">
                    My Process
                </h2>
                <ul className={classes['process']}>
                    <li className={classes['process__list']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <span className="heading-secondary color-gray" aria-hidden="true">01</span>
                        <div className="">
                            <h3 className="heading-tertiary text-right process-title">Brief</h3>
                            <p className=" width-min paragraph right">
                                Fill in the requirement of the project as detailed as possible, to get more familiar with the project's detail.
                            </p>
                        </div>
                    </li>
                    <li className={classes['process__list']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <span className="heading-secondary color-gray " aria-hidden="true">02</span>
                        <div className="">
                            <h3 className="heading-tertiary text-right process-title">Research</h3>
                            <p className=" width-min paragraph right">
                                The project mostly has a range of existing competition and ideas. Try to understand the audience requirement
                                and expectations.
                            </p>
                        </div>
                    </li>
                    <li className={classes['process__list']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <span className="heading-secondary color-gray  " aria-hidden="true">03</span>
                        <div className="">
                            <h3 className="heading-tertiary text-right process-title">Visualization</h3>
                            <p className=" width-min paragraph right">
                                I sometimes use design tools like Figma to try out my designs or prototype. I also let myself get inspired with the work of other beautiful design works.
                            </p>
                        </div>
                    </li>
                    <li className={classes['process__list']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <span className="heading-secondary color-gray " aria-hidden="true">04</span>
                        <div className="">
                            <h3 className="heading-tertiary text-right process-title">Development</h3>
                            <p className=" width-min paragraph right">
                                Building of the product commences after negotiation and approval.
                            </p>
                        </div>
                    </li>
                    <li className={classes['process__list']} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        <span className="heading-secondary color-gray " aria-hidden="true">05</span>
                        <div className="">
                            <h3 className="heading-tertiary text-right process-title">Conclude or repeat</h3>
                            <p className=" width-min paragraph right">
                                If work is satisfactory, The process ends here. If not, I go back to research and find what was missed to better realize the goal.
                            </p>
                        </div>
                    </li>
                </ul>
            </section >
        </aside >

    )

}
export default Process;