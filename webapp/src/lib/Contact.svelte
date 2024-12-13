<script lang="ts">
    import { Container, Header, Table, Table_Row, Table_Body, Table_Col, Link, Icon } from "svelte-fomantic-ui";

    export let page = "start";
</script>

<Container ui style="padding-top:50px;min-height:200px;padding-bottom:50px;">
    <Header ui h2 inverted>You can find me in various places</Header>
    <Table ui inverted centered>
        <Table_Body>
            <Table_Row>
                <Table_Col right aligned>LinkedIn <Icon ui linkedin/></Table_Col>
                <Table_Col><Link href="https://www.linkedin.com/in/roycdavies/" target="_blank">https://www.linkedin.com/in/roycdavies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Orcid <Icon ui orcid/></Table_Col>
                <Table_Col><Link href="https://orcid.org/0000-0001-6302-1931" target="_blank">https://orcid.org/0000-0001-6302-1931</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Research Gate <Icon ui researchgate/></Table_Col>
                <Table_Col><Link href="https://www.researchgate.net/profile/Roy-Davies-2" target="_blank">https://www.researchgate.net/profile/Roy-Davies-2</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Academia <Icon ui scroll/></Table_Col>
                <Table_Col><Link href="https://roydavies12.academia.edu" target="_blank">https://roydavies12.academia.edu</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Waipapa Taumata Rau / University of Auckland <Icon ui university/></Table_Col>
                <Table_Col><Link href="https://profiles.auckland.ac.nz/roy-davies" target="_blank">https://profiles.auckland.ac.nz/roy-davies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>academyEX <Icon ui university/></Table_Col>
                <Table_Col><Link href="https://academyex.com/people/roy-davies" target="_blank">https://academyex.com/people/roy-davies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Lunds Universitet / The university of Lund <Icon ui university/></Table_Col>
                <Table_Col><Link href="https://lup.lub.lu.se/search/person/amt-rda" target="_blank">https://lup.lub.lu.se/search/person/amt-rda</Link> | <Link href="https://www.lu.se/search/roy%20davies" target="_blank">https://www.lu.se/search/roy%20davies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Imersia <Icon ui tablet alternate/></Table_Col>
                <Table_Col><Link href="https://www.imersia.com" target="_blank">https://www.imersia.com</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Mastertude <Icon ui globe/></Table_Col>
                <Table_Col><Link href="https://www.mastertude.com/the-team-roy-davies" target="_blank">https://www.mastertude.com/the-team-roy-davies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Bitbucket (Imersia) <Icon ui bitbucket/></Table_Col>
                <Table_Col><Link href="https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home" target="_blank">https://bitbucket.org/imersiageneral/cloud-mixed-reality-server-erlang-rel/wiki/Home</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Github <Icon ui github/></Table_Col>
                <Table_Col><Link href="https://github.com/roycdavies" target="_blank">https://github.com/roycdavies</Link> | <Link href="https://github.com/roycdaviesuoa" target="_blank">https://github.com/roycdaviesuoa</Link> | <Link href="https://github.com/uoa-smart-digital-lab" target="_blank">https://github.com/uoa-smart-digital-lab</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Gitlab <Icon ui gitlab/></Table_Col>
                <Table_Col><Link href="https://gitlab.com/drroycdavies" target="_blank">https://gitlab.com/drroycdavies</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>Reality 2.0 <Icon ui globe/></Table_Col>
                <Table_Col><Link href="https://reality2.ai" target="_blank">https://reality2.ai</Link></Table_Col>
            </Table_Row>
            <Table_Row>
                <Table_Col right aligned>DuckDuckGo Search <Icon ui search/></Table_Col>
                <Table_Col><Link href="https://duckduckgo.com/?q=roy+davies+virtual+reality+mixed+reality" target="_blank">https://duckduckgo.com/?q=roy+davies+virtual+reality+mixed+reality</Link></Table_Col>
            </Table_Row>
        </Table_Body>
    </Table>
</Container>
