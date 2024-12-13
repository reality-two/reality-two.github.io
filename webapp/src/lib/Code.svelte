<script lang="ts">
    import { Container, Header, Column, Table, Table_Row, Table_Body, Table_Col, Labels, Label, Link } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide>
        <Header ui h3 inverted>A few of the code projects I maintain</Header>
        I program many computer languages, and am familiar with many libraries.  I am a multi full stack developer, and have worked on many projects included cloud platforms, web applications, virtual reality, IoT and distributed systems.  
        My speciality is in building technologies that solve problems for people, and I particularly like building digital agent platforms.
        <br><br>
        In addition to computer languages, I am fascinated by human languages, and have learnt Swedish, some French and some te reo Māori, in addition to my native English.
    </Column>
    <Column sixteen wide justified>
        <Table ui inverted padded>
            <Table_Body>
                <Table_Row>
                    <Table_Col>
                        <Header ui h4 inverted>Open Source</Header>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://github.com/reality-two" target="_blank">Reality2</Link></Table_Col>
                    <Table_Col>A new way to design calm, assistive technologies.</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>elixir</Label>
                            <Label ui>typescript</Label>
                            <Label ui>svelte</Label>
                            <Label ui>python</Label>
                            <Label ui>godot</Label>
                            <Label ui>unity</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://github.com/roycdaviesuoa/svelte-fomantic-ui" target="_blank">Svelte Fomantic UI</Link></Table_Col>
                    <Table_Col>A Svelte component library for Fomantic UI.</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>typescript</Label>
                            <Label ui>javascript</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://github.com/uoa-smart-digital-lab/openxr_ux_unity_base" target="_blank">OpenXR UX Unity Base</Link></Table_Col>
                    <Table_Col>A set of UX tools for use with OpenXR in Unity to make life easier for non-programmers.</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>c#</Label>
                            <Label ui>javascript</Label>
                            <Label ui>unity</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://gitlab.com/cee-smart-digital-lab/nz-ac-auckland-sdl-xrmux" target="_blank">MR Mux</Link></Table_Col>
                    <Table_Col>An extremely lightweight multiplexor between connected Mixed and Virtual Reality devices to synchronise Virtual Environments</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>elixir</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://github.com/uoa-smart-digital-lab/lab-booking-system" target="_blank">Lab Booking System</Link></Table_Col>
                    <Table_Col>An equipment booking system for university computer labs.</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>elixir</Label>
                            <Label ui>typescript</Label>
                            <Label ui>svelte</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col >
                        <Header ui h4 inverted>Closed Source</Header>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col left aligned><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home" target="_blank">The Imersia Mixed Reality Server</Link></Table_Col>
                    <Table_Col>A highly scalable and flexible game engine and mixed reality server for spatial computing and geospatial gaming.</Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>erlang</Label>
                            <Label ui>javascript</Label>
                            <Label ui>react</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col >
                        <Header ui h4 inverted>This website</Header>
                    </Table_Col>
                    <Table_Col></Table_Col>
                    <Table_Col></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col>
                        <Link href="https://roycdavies.github.io" target="_blank">roycdavies.github.io</Link>
                    </Table_Col>
                    <Table_Col left aligned>
                        This site was built using <Link href="https://vitejs.dev/guide/">vite</Link>, <Link href="https://svelte.dev/">svelte</Link>, and a library I created called <Link href="https://www.npmjs.com/package/svelte-fomantic-ui">svelte-fomantic-ui</Link>
                    </Table_Col>
                    <Table_Col right aligned>
                        <Labels ui tiny blue fluid centered>
                            <Label ui>svelte</Label>
                            <Label ui>typescript</Label>
                        </Labels>
                    </Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
    </Column>
</Container>
