
const  HeroIcon = 'Images/Group.png'

export default function Hero() {
    return (
        <section className="hero">
                <img className="hero-pic" src={HeroIcon} alt="Hero-icon"></img>
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}