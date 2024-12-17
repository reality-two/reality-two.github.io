<script lang="ts">
    import { Container, Image, Column, Text, Buttons, Button, Icon } from "svelte-fomantic-ui";

    export let allImages: any;
    export let folder="";

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

</script>

<Container ui style="padding-top:20px;min-height:200px;padding-bottom:0px;">
    <Column style="padding-bottom: 0px;">
        <Button ui image on:click={() => counter = Math.min(images.length-1, (counter + 1))} style="padding: 0px;">
            <Image ui fluid src={images[counter]}/>
        </Button>
    </Column>
    <Column center aligned>
        <Buttons ui basic>
            <Button ui grey icon on:click={() => counter = Math.max(0, (counter - 1))}>
                <Icon angle left grey/>
            </Button>
            <Button ui blue><Text ui grey>{counter + 1} of {images.length}</Text></Button>
            <Button ui grey icon on:click={() => counter = Math.min(images.length-1, (counter + 1))}>
                <Icon angle right grey/>
            </Button>
        </Buttons>
    </Column>
</Container>