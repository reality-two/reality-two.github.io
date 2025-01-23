<script lang="ts">
    import { Container, Table, Table_Row, Table_Body, Table_Col, Link, Icon, Column, Text } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Column sixteen wide centered>
        <Text ui big>Contact</Text>
    </Column>
    <Column sixteen wide justified>
        <Table ui inverted centered huge>
            <Table_Body>
                <Table_Row>
                    <Table_Col right aligned>Github <Icon ui github/></Table_Col>
                    <Table_Col><Link href="https://github.com/reality-two" target="_blank">https://github.com/reality-two</Link></Table_Col>
                </Table_Row>
                <Table_Row>
                    <Table_Col right aligned>Head Developer <Icon ui running/></Table_Col>
                    <Table_Col><Link href="mailto:contact@reality2.ai?subject=Making contact">Dr. Roy C. Davies</Link></Table_Col>
                </Table_Row>
            </Table_Body>
        </Table>
    </Column>
</Container>
