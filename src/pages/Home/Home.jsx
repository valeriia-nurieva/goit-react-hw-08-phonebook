import { Head, Hero, HeroContainer, Description, Text } from "./Home.styled";

const Home = () => {
    return (
        <Hero>
            <HeroContainer>
                <Head>Phonebook</Head>
                <Description>new app for you</Description>
                <Text>your faithful assistant anytime <span>anywhere</span> <span>on any device</span></Text>
            </HeroContainer>
        </Hero>
    );
};

export default Home;
