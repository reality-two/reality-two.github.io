<script lang="ts">
    import { Container, Column } from "svelte-fomantic-ui";

    import Slidedeck from "./Slidedeck.svelte";


    export let page = "start";
    export let allImages: any;

</script>

<Slidedeck folder="beautifully_usable" {allImages}/>

<Slidedeck folder="wanderland" {allImages}/>

<Slidedeck folder="iot" {allImages}/>

