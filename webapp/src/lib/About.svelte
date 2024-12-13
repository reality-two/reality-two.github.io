<script lang="ts">
    import { Container, Header, Column, Image, Link } from "svelte-fomantic-ui";
    import reality2 from "../assets/reality2 enabled.png"

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column four wide>
        <Image ui src={reality2}/>
        <span style="font-style:italic">Dr. Roy C. Davies</span>
    </Column>
    <Column twelve wide justified>
        <Header ui h4 inverted>Why?</Header>
        The paradox of security vs usability has forced us down a path of increasing complexity in digital technologies.  Contextual information can help solve this conundrum, but how to do this securely?
        We contemplated this problem, and decided that a new usability metaphor was required - the Objects and Actors metaphor, along with a 'local-first' policy to data storage.
    </Column>
    <Column sixteen wide justified>
        <Header ui h4 inverted>How?</Header>
    </Column>
</Container>
