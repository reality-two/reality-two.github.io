<script lang="ts">
    import { Header, Container, Label, Items, Item, Cards, Card, Image, Content, Link, Meta, Description, Extra } from "svelte-fomantic-ui";

    import GH from "./githubgraphql";

    export let extension = "bee";
    export let dir = "bees";
    export let default_image = "";

    let github = new GH();
    let items = {};
    let loading = true;

    github.listDirectory(dir)
    .then((files) => {
        let filenames = GH.JSONPath(files, "data.repository.object.entries");

        github.getInfo(dir)
        .then(info => {
            let fileinfo = JSON.parse(GH.JSONPath(info, "data.repository.object.text"));
            loading = false;

            for (let i = 0; i < filenames.length; i++) {
                let filename = filenames[i];
                let shortname = filename.name.replace(new RegExp(`\\.${extension}\\.(yaml|json|toml)$`), '');

                if (fileinfo.hasOwnProperty(shortname)) {
                    let thisfileinfo = fileinfo[shortname];
                    items[shortname] = {
                        "filename": filename.name,
                        "title": thisfileinfo.name,
                        "description": thisfileinfo.description,
                        "type": filename.name.slice(-4),
                        "link": "https://github.com/reality-two/reality2-definitions/blob/main/"+dir+"/"+filename.name
                    }
                }
            };
        });
    });
</script>

<Container ui left aligned>
    {#if loading}
        <Header ui h3 inverted>Loading...</Header>
    {:else}
        <Items ui inverted left aligned divided>
            {#each Object.keys(items) as item_name}
                <Item>
                    <Link ui small image target="_blank" href={items[item_name].link}>
                        <Image src={default_image}/>
                    </Link>
                    <Content middle aligned>
                        <Link header target="_blank" href={items[item_name].link}>{items[item_name].title}</Link>
                        <Description>
                            <p>{items[item_name].description}</p>
                        </Description>
                        <Extra>
                            {#if items[item_name].type == "yaml"}
                                <Label ui blue>YAML</Label>
                            {:else if items[item_name].type == "json"}
                                <Label ui green>JSON</Label>
                            {:else if items[item_name].type == "toml"}
                                <Label ui orange>TOML</Label>
                            {/if}
                        </Extra>
                    </Content>
                </Item>
            {/each}
        </Items>
    {/if}
</Container>