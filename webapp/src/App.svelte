<script lang="ts">
    import { Segment } from 'svelte-fomantic-ui';

    import MainMenu from "./lib/MainMenu.svelte";

    import Start from "./lib/Start.svelte";
    import About from "./lib/About.svelte";
    import Contact from "./lib/Contact.svelte";
    import ObjectsAndActors from "./lib/ObjectsAndActors.svelte";
    import TransientNetworks from "./lib/TransientNetworks.svelte";
    import Sentants from "./lib/Sentants.svelte";
    import Information from "./lib/Information.svelte";

    const allImages = import.meta.glob('/src/assets/**/*.png', { eager: true, as: 'url' });

    let page = "start";
</script>

<main>
    <Segment ui inverted vertical center aligned style="min-height:1000px">

        <MainMenu bind:page/>

        {#if page==="start"}
            <Start {page} {allImages}/>
        {:else if page==="about"}
            <About {page} {allImages}/>
        {:else if page==="objectsandactors"}
            <ObjectsAndActors {page}/>
        {:else if page==="sentants"}
            <Sentants {page}/>
        {:else if page==="information"}
            <Information {page}/>
        {:else if page==="transientnetworks"}
            <TransientNetworks {page}/>
        {:else if page==="contact"}
            <Contact {page}/>
        {/if}
    </Segment>

</main>

<style>

</style>
