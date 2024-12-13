<script lang="ts">
    import {Button, Menu, Container, Link, Item, Segment, Header, Table, Table_Body, Table_Col, Table_Row, Icon, Message, Content, Column, Image, Labels, Label } from 'svelte-fomantic-ui';

    import MainMenu from "./lib/MainMenu.svelte";

    import Start from "./lib/Start.svelte";
    import About from "./lib/About.svelte";
    import StrongIdeas from "./lib/StrongIdeas.svelte";
    import QuadrupleDiamond from "./lib/QuadrupleDiamond.svelte";
    import Code from "./lib/Code.svelte";
    import Contact from "./lib/Contact.svelte";

    let page = "start";
</script>

<main>
    <Segment ui inverted vertical center aligned style="min-height:1000px">

        <MainMenu bind:page/>

        {#if page==="start"}
            <Start {page}/>
        {:else if page==="about"}
            <About {page}/>
        {:else if page==="strong_ideas"}
            <StrongIdeas {page}/>
        {:else if page==="quadruple"}
            <QuadrupleDiamond {page}/>
        {:else if page==="code"}
            <Code {page}/>
        {:else if page==="contact"}
            <Contact {page}/>
        {/if}
    </Segment>

</main>

<style>

</style>
