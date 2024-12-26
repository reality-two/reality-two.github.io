<script lang="ts">
    import { Container, Column, Text, Divider, Menu, Link, Header } from "svelte-fomantic-ui";

    import reality2bee from "../assets/bee.png";
    import reality2swarm from "../assets/swarm.png";
    import reality2antennae from "../assets/antennae.png";
    import reality2behaviours from "../assets/behaviours.png";

    import MarketItems from "./MarketItems.svelte";
    import Construct from "./Construct.svelte";

    import mermaid from "mermaid";

    export let page = "start";

    let subpage = "swarms";
    let incoming_data: [string, string] = ["json", ""];

    // Saved state for constructor
    var construct_command = "";
    let savedState = {};

    // Set up the sentant loading
    var loadedData: any[] = [];
    $: sentantData = loadedData;
    $: variables = {};

    // import R2 from "./reality2";

    // let r2_node = new R2("localhost", Number("4005"));

    // The default diagram
    let diagram = `\
        flowchart LR
            A[Download Swarm, Bee, Antenna or Behaviour Definitions from below or from the <a href='https://github.com/reality-two/reality2-definitions'>R2-definitions Github</a>] --> B(Load onto Node using <a href='https://github.com/reality-two/reality2-documentation/blob/main/userfriendly/construct.md'>Construct</a> in default WebApp, <a href='https://github.com/reality-two/reality2-definitions/tree/main/client-python'>Python Client</a> or via <a href='https://github.com/reality-two/reality2-documentation/blob/main/instructions/4%20GraphQL/README.md'>GraphQL</a>)
            B --> C(Tweak and combine with other Recipes to build desired behaviours and add authentication codes.)
            C --> D(Set running on Node.)
            D --> E(Interact using the <a href='https://github.com/reality-two/reality2-node-core-elixir/tree/main/web/sentants'>default WebApp</a>, <a href='https://github.com/reality-two/reality2-definitions/tree/main/client-python'>Python Client</a> or via <a href='https://github.com/reality-two/reality2-documentation/blob/main/instructions/4%20GraphQL/README.md'>GraphQL</a>)
    `;

    let container;

    async function renderDiagram() {
        const {svg} = await mermaid.render('mermaid', diagram)
        container.innerHTML=svg;
    }

    renderDiagram()

</script>

<Container ui style="padding-top:50px;padding-bottom:20px;">
    <Text ui big>The Reality2 Marketplace</Text><br/>
    <Text ui medium>Swarm, Bee, Antenna and Behaviour Definitions to build your own Sentants/Bees.</Text>
    <Divider ui/>
    <Container ui style="background-color: #888888;">
        <span bind:this={container}/>
    </Container>
    <Divider ui/>
</Container>

<Container ui stackable>
    <Menu ui large inverted pointing stackable>
        <Link item active={subpage==="swarms"} blue={subpage==="swarms"} on:click={()=>subpage="swarms"}>Swarms</Link>
        <Link item active={subpage==="bees"} blue={subpage==="bees"} on:click={()=>subpage="bees"}>Bees</Link>
        <Link item active={subpage==="antennae"} blue={subpage==="antennae"} on:click={()=>subpage="antennae"}>Antennae</Link>
        <Link item active={subpage==="behaviours"} blue={subpage==="behaviours"} on:click={()=>subpage="behaviours"}>Behaviours</Link>
        <!-- <Menu right>
            <Link item active={subpage==="playground"} green={subpage==="playground"} on:click={()=>subpage="playground"}>Playground</Link>
        </Menu> -->
    </Menu>
    <Divider ui/>
</Container>

{#if subpage == "swarms"}
    <MarketItems extension="swarm" dir="swarms" default_image={reality2swarm} bind:subpage bind:incoming_data/>
{:else if subpage == "bees"}
    <MarketItems extension="bee" dir="bees" default_image={reality2bee} bind:subpage bind:incoming_data/>
{:else if subpage == "antennae"}
    <MarketItems extension="antenna" dir="antennae" default_image={reality2antennae} bind:subpage bind:incoming_data/>
{:else if subpage == "behaviours"}
    <MarketItems extension="behaviour" dir="behaviours" default_image={reality2behaviours} bind:subpage bind:incoming_data/>
{:else if subpage == "playground"}
    <div style="padding: 0px; position: relative;">
        <Construct bind:construct_command bind:savedState bind:variables  bind:incoming_data/>
    </div>
{/if}

