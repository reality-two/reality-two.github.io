<script lang="ts">
    import { Container, Menu, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui stackable>
    <Menu ui large secondary inverted pointing stackable>
        <Link item active={page==="start"} blue={page==="start"} on:click={()=>page="start"}>Home</Link>
        <Link item active={page==="objectsandactors"} blue={page==="objectsandactors"} on:click={()=>page="objectsandactors"}>Objects and Actors</Link>
        <Link item active={page==="sentants"} blue={page==="sentants"} on:click={()=>page="sentants"}>Sentient Agents</Link>
        <Link item active={page==="transientnetworks"} blue={page==="transientnetworks"} on:click={()=>page="transientnetworks"}>Transient Networks</Link>
        <Menu right>
            <Link item active={page==="marketplace"} orange={page==="marketplace"} on:click={()=>page="marketplace"}>Marketplace</Link>
            <Link item active={page==="information"} green={page==="information"} on:click={()=>page="information"}>Guides</Link>
            <Link item active={page==="about"} green={page==="about"} on:click={()=>page="about"}>Case Studies</Link>
        </Menu>
    </Menu>
</Container>
