<script lang="ts">
    import { Container, Menu, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui>
    <Menu ui large secondary inverted pointing stackable>
        <Link item active={page==="start"} blue={page==="start"} on:click={()=>page="start"}>Home</Link>
        <Link item active={page==="objectsandactors"} blue={page==="objectsandactors"} on:click={()=>page="objectsandactors"}>Objects and Actors</Link>
        <!-- <Link item active={page==="sentants"} blue={page==="sentants"} on:click={()=>page="sentants"}>Sentient Agents</Link> -->
        <!-- <Link item active={page==="calmtechnology"} blue={page==="calmtechnology"} on:click={()=>page="calmtechnology"}>Calm Technology</Link> -->
        <Menu right>
            <Link item active={page==="information"} green={page==="information"} on:click={()=>page="information"}>Information</Link>
            <Link item active={page==="about"} green={page==="about"} on:click={()=>page="about"}>About</Link>
            <Link item active={page==="contact"} green={page==="contact"} on:click={()=>page="contact"}>Contact</Link>
        </Menu>
    </Menu>
</Container>
