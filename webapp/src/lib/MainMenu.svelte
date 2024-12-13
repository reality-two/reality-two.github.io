<script lang="ts">
    import { Container, Menu, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui>
    <Menu ui large secondary inverted pointing stackable>
        <Link item active={page==="start"} blue={page==="start"} on:click={()=>page="start"}>Start</Link>
        <Link item active={page==="about"} blue={page==="about"} on:click={()=>page="about"}>About</Link>
        <!-- <Link item active={page==="strong_ideas"} blue={page==="strong_ideas"} on:click={()=>page="strong_ideas"}>Strong Ideas</Link>
        <Link item active={page==="quadruple"} blue={page==="quadruple"} on:click={()=>page="quadruple"}>Quadruple Diamond</Link> -->
        <!-- <Link item active={page==="spatial"} blue={page==="spatial"} on:click={()=>page="spatial"}>Spatial Computing</Link>
        <Link item active={page==="ia"} blue={page==="ia"} on:click={()=>page="ia"}>Intelligence Augmentation</Link> -->
        <Menu right>
            <!-- <Link item active={page==="code"} green={page==="code"} on:click={()=>page="code"}>Code</Link> -->
            <Link item active={page==="contact"} green={page==="contact"} on:click={()=>page="contact"}>Contact</Link>
        </Menu>
    </Menu>
</Container>
