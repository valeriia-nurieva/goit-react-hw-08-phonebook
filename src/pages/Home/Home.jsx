import { Head, Hero, Description, Text } from "./Home.styled";

const Home = () => {
    return (
        <Hero>
            <Head>Phonebook</Head>
                <Description>New app for you</Description>
                <Text>your faithful assistant anytime <span>anywhere</span> <span>on any device</span></Text>
        </Hero>
    );
};

export default Home;
