<script lang="ts">
    import { Container, Header, Column, Image } from "svelte-fomantic-ui";
    import quadruplediamond from "../assets/quadruplediamond.png"

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide>
        <Header ui h3 inverted>The Quadruple Diamond Methodology</Header>
    </Column>
    <Column sixteen wide>
        <Image ui src={quadruplediamond}/>
        <span style="font-style:italic">Figure 1: The Quadruple Diamond Methodology</span>
    </Column>
    <Column sixteen wide justified>
        The quadruple diamond methodology is a way to build strong ideas primarily for commercialisation, though can also be used to support blue-skies research and longer acting ideas development.  I have based it on the double diamond methodology, which is a well known and well used tool for design thinking, and enhanced it with knowledge from the lean startup field.
        <br><br>
        Each diamond represents an idea expansion and an idea contraction or focus phase.  You go wide, gather as much information as you can, then you make decisions and move towards a specific solution.
        <br><br>
        The key premise is that strong ideas need to be tested, critiqued and evaluated by a wide diversity of people, and then either improved or discarded.  It is both important to recognise when an idea is not worth pursuing and of course when an idea can be progressed to become stronger.  Each inflection point of the diamonds is a decision point – to discard, reassess (hence the backward arrows), or progress.
        <br><br>
        For investors, this represents a predictable risk profile where they are encouraged to invest both in early stage (high risk) and late stage (lower risk) ideas.
        <Header ui h4 inverted>Strengthen</Header>
        Ideas typically start in someone’s head in a moment of inspiration, or after long hard work (or both).  That idea must then be strengthened through debate with others, testing, and any other processes that are typically used to try to find all the different ways the idea may fail.  This is Conjecture (the idea) and Refutation (the testing) at its finest.
        <Header ui h4 inverted>Innovate</Header>
        If the ideas survives, it enters the pool where it awaits resources (time and money) to be validated through building a Proof of Concept.  This may take any number of forms – it may be technical, or conceptual, but it must aim to test the underlying concepts of the idea in real world situations.  These may be simulated or limited situations, but it is important to get feedback from the actual stakeholders or representatives about the strength of the idea.
        <Header ui h4 inverted>Activate</Header>
        If the PoC looks promising, a more substantial development process is embarked on in order to develop a first release (if a physical product) or a fully complete, though minimal structure if the idea is more organisational in nature.  This is sometimes called a Minimum Viable Product, but with the caveat that the goal here is not to rush to market with the quickest, dirtiest solution, but rather take the time needed to ensure this will support the long-term goals and aims of the idea moving forward, with the MVP being built on and added to over time.
        <Header ui h4 inverted>Propogate</Header>
        The final phase recognises that products and services resulting from ideas don’t necessarily automatically attract customers.  “Build it and they will come” is rarely true, and in fact many ‘overnight successes’ are in fact the result of years of hard work.
        <br><br>
        We recognise this and see that reaching the intended customers with a desirable product is in itself a process of building strong ideas.  Further, propagation is not reserved for commercial products.  Scientists publish papers, go to conferences and lead research teams; artists perform their work to audiences – each is an example of reaching an intended group of stakeholders appropriate to the type of idea.
    </Column>
</Container>
