<script lang="ts">
    import { Container, Column, Text } from "svelte-fomantic-ui";

    import Slidedeck from "./Slidedeck.svelte";


    export let page = "start";
    export let allImages: any;

</script>

<Slidedeck folder="beautifully_usable" link="https://www.beautiful.ai/player/-OCjBNmWkL5wgRbuc8-0" {allImages}/>

<Slidedeck folder="wanderland" link="https://www.beautiful.ai/player/-OE5nw-d5AbdoN2nxs_X" {allImages}/>

<Slidedeck folder="iot" link="https://www.beautiful.ai/player/-OCgbjzxI9gUFFavigV1" {allImages}/>

