<script lang="ts">
    import { Container, Image, Column, Text, Buttons, Button, Icon } from "svelte-fomantic-ui";
    import Link from "svelte-fomantic-ui/src/lib/elements/Link.svelte";

    export let allImages: any;
    export let folder="";
    export let link="";

    // Import all images from the directory
    // const allImages = import.meta.glob('/src/assets/**/*.png', { eager: true, as: 'url' });

    // Function to filter images based on a dynamic folder name
    function getImagesForFolder(folderName) {
        return Object.entries(allImages)
            .filter(([path]) => path.includes(`/src/assets/${folderName}/`))
            .map(([, url]) => url);
    }

    const images = getImagesForFolder(folder);

    let counter = 0;

    let width;

    // Bind the window's innerWidth to the width variable
    $: window.addEventListener('resize', () => {
        width = window.innerWidth;
    });

    // Set initial width
    width = window.innerWidth;

</script>

<Container ui style="padding-top:20px;min-height:200px;padding-bottom:0px;">
    <Column style="padding-bottom: 0px;">
        <div style="padding: 0px; position: relative;">
            <Image ui fluid src={images[counter]}/>
            {#if width > 600}
                <Button ui icon popup massive basic disabled={counter == 0} data-tooltip="Previous" data-position="top left" style="position: absolute; top: 50%; left: 10px; transform: translateY(-50%);" on:click={() => counter = Math.max(0, (counter - 1))}>
                    <Icon angle left grey/>
                </Button>
                <Button ui icon popup massive basic disabled={counter == (images.length-1)} data-tooltip="Next" data-position="top right" style="position: absolute; top: 50%; right: 10px; transform: translateY(-50%);" on:click={() => counter = Math.min(images.length-1, (counter + 1))}>
                    <Icon angle right grey/>
                </Button>
            {/if}
        </div>
    </Column>
    <Column center aligned>
        <Buttons ui basic>
            <Button ui grey icon disabled={counter == 0} on:click={() => counter = Math.max(0, (counter - 1))}>
                <Icon angle left grey/>
            </Button>
            <Button ui blue on:click={() => counter = 0}><Text ui grey>{counter + 1} of {images.length}</Text></Button>
            <Button ui grey icon disabled={counter == (images.length-1)} on:click={() => counter = Math.min(images.length-1, (counter + 1))}>
                <Icon angle right grey/>
            </Button>
            {#if link != ""}
                <Button ui grey icon>
                    <Link ui grey href={link} target="_blank" alt="original slidedeck">
                        <Icon expand/>
                    </Link>
                </Button>
            {/if}
        </Buttons>
    </Column>
</Container>