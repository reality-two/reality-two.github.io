<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text, Divider } from "svelte-fomantic-ui";

    export let page = "start";


</script>

<Container ui grid style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Information</Text>
    </Column>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            Reality2 is opensource, with a dual license.  You can use it for non-commercial applications for free (as is - no liabilities accepted), or commercially.  For commercial applications, please contact us at <a href="mailto:contact@reality2.ai">contact@reality2.ai</a> and we can work out terms.
        </Text>
        <Divider ui/>
        <Text ui large>
            Presently (as of December, 2024), Reality2 is in early Beta.  This means that it is not complete, will have bugs, aspects may change suddenly and without warning, and it is not recommended you use it for mission-critical applications.  That said, we encourage you to have a go, and then let us know how it went.
        </Text>
        <Divider ui/>
        <Text ui large>
            Below are links to more information, and the code.  Check in often for updates.  Send feedback, note bugs and ask questions through the appropriate channels on the GitHub repositories.
        </Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Documentation <Icon ui splotch/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-documentation" target="_blank">https://github.com/reality-two/reality2-documentation</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Reality2 Node core <Icon ui microchip/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-node-core-elixir" target="_blank">https://github.com/reality-two/reality2-node-core-elixir</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Sentant and Swarm definitions <Icon ui book/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-definitions" target="_blank">https://github.com/reality-two/reality2-definitions</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Godot VR Client <Icon ui glasses/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-godot-client" target="_blank">https://github.com/reality-two/reality2-godot-client</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>IOT WebApp Demo <Icon ui gamepad/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-webapp-iotdemo" target="_blank">https://github.com/reality-two/reality2-webapp-iotdemo</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Default Sentants WebApp <Icon ui gamepad/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality2-node-core-elixir/tree/main/web/sentants" target="_blank">https://github.com/reality-two/reality2-node-core-elixir/tree/main/web/sentants</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
    <Column sixteen wide justified>
        <Divider ui/>
        <Text ui large>
            If you are curious about how this website was created, it is a static site created using Svelte, with the graphics library Fomantic UI using the vite framework.  It is hosted on github.io.
        </Text>
    </Column>
    <Table ui inverted centered huge>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>Reality2 Website <Icon ui globe/></Table_Col>
                <Table_Col><Link href="https://github.com/reality-two/reality-two.github.io" target="_blank">https://github.com/reality-two/reality-two.github.io</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>
