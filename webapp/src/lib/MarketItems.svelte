<script lang="ts">
    import { behavior, Header, Container, Label, Items, Item, Button, Icon, Message, Image, Content, Link, Divider, Description, Extra, Modal } from "svelte-fomantic-ui";

    import GH from "./GithubAPI";

    //@ts-ignore
    import yaml from 'js-yaml';

    export let extension = "bee";
    export let dir = "bees";
    export let default_image = "";
    export let subpage = "";
    export let incoming_data: [string, any] = ["json", ""];

    export let pageHeight = '600px';

    let github = new GH();
    let items = {};
    let loading = true;

    $: code = {};
    $: showJSON = [];

    github.listDirectory(dir)
    .then((filenames:any) => {
        github.getInfo(dir)
        .then(fileinfo => {
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


    function saveToFile(filename, content) {
        // Create a new Blob with the content
        const blob = new Blob([content], { type: 'text/plain' });
        
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        
        // Append the link to the body (required for some browsers)
        document.body.appendChild(link);
        
        // Trigger the download
        link.click();
        
        // Clean up by removing the link and releasing the Blob URL
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    }

    function loadItem(name: string, type: string) {
        github.getFile(dir, name)
        .then(filecontents => {
            // incoming_data = [type, filecontents];
            // subpage = "playground";

            code = filecontents;
            console.log(filecontents);
            behavior("the_code", "show");
        })
    }

    function downloadItem(name: string, type: string) {
        github.getFile(dir, name)
        .then(filecontents => {
            saveToFile(name, filecontents)
        })
    }
</script>

<Container ui left aligned>
    {#if loading}
        <Message ui medium inverted>
            <Header ui h3 inverted>Loading...</Header>
            If this seems to get stuck on 'Loading...', it is likely due to <a target="_blank" href="https://www.endorlabs.com/learn/how-to-get-the-most-out-of-github-api-rate-limits#github-rate-limit-brief-overview">Github Limitations in the use of the free API</a>.  You can download the Definitions from <a target="_blank" href="https://github.com/reality-two/reality2-definitions">the Github repository</a> instead, or wait an hour...
        </Message>
    {:else}
        <Items ui inverted left aligned divided>
            {#each Object.keys(items) as item_name}
                <Item style="position: relative;">
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

                    <Button ui basic grey inverted icon style="position: absolute; bottom: 10px; right: 30px;" on:click={(event)=>{ loadItem(items[item_name].filename, items[item_name].type); }}>
                        <Icon ui code/>
                    </Button>
                    <Button ui basic grey inverted icon style="position: absolute; top: 10px; right: 30px;" on:click={(event)=>{ downloadItem(items[item_name].filename, items[item_name].type); }}>
                        <Icon ui download/>
                    </Button>
                </Item>
            {/each}
        </Items>
        <Divider ui/>
    {/if}
</Container>

<Modal ui large id="the_code">
    <div class="ui scrollable" id="codeDiv" style="text-align: left; height:{pageHeight}; overflow-y: auto; word-wrap: break-word;">
        <pre style="text-align: left;">
            {"\n"}{code}
            <!-- {#if Object.keys(code).length !== 0}
                {#if showJSON[0] === "json"}
                    {JSON.stringify(code, null, 2)}
                {:else}
                    {yaml.dump(code)}
                {/if}
            {/if} -->
        </pre>
    </div>
</Modal>