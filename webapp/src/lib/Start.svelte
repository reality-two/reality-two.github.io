<script lang="ts">
    import { Container, Header, Image } from "svelte-fomantic-ui";

    import reality2bee from "../assets/reality2 enabled.png"

    export let page = "start";
    
</script>

<Container ui style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Header ui h2 inverted>Welcome to Reality2.</Header>
    <Header ui h3 inverted>A new framework for truly assistive technologies.</Header>
    {#if page==="start"}
        <Image ui src={reality2bee}/>
    {/if}
</Container>
