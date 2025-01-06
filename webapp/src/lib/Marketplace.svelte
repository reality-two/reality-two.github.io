<script lang="ts">
    import { Container, Column, Text, Divider, Menu, Link, Image } from "svelte-fomantic-ui";

    import reality2bee from "../assets/bee.png";
    import reality2swarm from "../assets/swarm.png";
    import reality2antennae from "../assets/antennae.png";
    import reality2behaviours from "../assets/behaviours.png";

    import MarketItems from "./MarketItems.svelte";
    import Construct from "./Construct.svelte";
    import HowToDiagram from "./HowToDiagram.svelte";
    
    export let page = "start";
    export let pageHeight = '600px';

    let subpage = "swarms";
    let incoming_data: [string, string] = ["json", ""];

    // Saved state for constructor
    var construct_command = "";
    let savedState = {};


    let width;

    // Bind the window's innerWidth to the width variable
    $: window.addEventListener('resize', () => {
        width = window.innerWidth;
    });

    // Set initial width
    width = window.innerWidth;

    // Set up the sentant loading
    var loadedData: any[] = [];
    $: variables = {};

</script>

<Container ui style="padding-top:50px;padding-bottom:20px;">
    <Text ui big>The Reality2 Marketplace</Text><br/>
    <Text ui medium>Swarm, Bee, Antenna and Behaviour Definitions to build your own Sentants/Bees.</Text>
    <Menu ui centered large inverted top attached blue style="border: none; justify-content:center;">
       <HowToDiagram {width}/>
    </Menu>
    <Menu ui large inverted pointing stackable bottom attached grey style="border: none; border-width: 0px; margin-top: -5px;">
        <Link item active={subpage==="swarms"} blue={subpage==="swarms"} on:click={()=>subpage="swarms"}>Swarms</Link>
        <Link item active={subpage==="bees"} blue={subpage==="bees"} on:click={()=>subpage="bees"}>Bees</Link>
        <Link item active={subpage==="antennae"} blue={subpage==="antennae"} on:click={()=>subpage="antennae"}>Antennae</Link>
        <Link item active={subpage==="behaviours"} blue={subpage==="behaviours"} on:click={()=>subpage="behaviours"}>Behaviours</Link>
        <!-- <Menu right>
            <Link item active={subpage==="playground"} green={subpage==="playground"} on:click={()=>subpage="playground"}>Playground</Link>
        </Menu> -->
    </Menu>
    <Divider ui/>

    {#if subpage == "swarms"}
        <MarketItems extension="swarm" dir="swarms" default_image={reality2swarm} bind:subpage bind:incoming_data {pageHeight}/>
    {:else if subpage == "bees"}
        <MarketItems extension="bee" dir="bees" default_image={reality2bee} bind:subpage bind:incoming_data {pageHeight}/>
    {:else if subpage == "antennae"}
        <MarketItems extension="antenna" dir="antennae" default_image={reality2antennae} bind:subpage bind:incoming_data {pageHeight}/>
    {:else if subpage == "behaviours"}
        <MarketItems extension="behaviour" dir="behaviours" default_image={reality2behaviours} bind:subpage bind:incoming_data {pageHeight}/>
    {:else if subpage == "playground"}
        <div style="padding: 0px; position: relative;">
            <Construct bind:construct_command bind:savedState bind:variables  bind:incoming_data/>
        </div>
    {/if}
</Container>
