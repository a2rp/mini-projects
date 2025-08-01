import { MdClear } from "react-icons/md";
import { Styled } from './styled'
import { NavLink } from 'react-router-dom'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const projectsList = [
    { name: "Avataars", link: "/avataars" },
    { name: "Accordion", link: "/accordion" },
    { name: "Hello World", link: "/hello-world" }
];

const Home = () => {
    const [searchedProject, setSearchedProject] = useState("");

    const handleInputChange = (event) => {
        setSearchedProject(event.target.value);
    };

    const filteredProjects = projectsList.filter(project =>
        project.name.toLowerCase().includes(searchedProject.toLowerCase())
    );

    return (
        <Styled.Wrapper>
            <Styled.Main>
                {/* <Styled.LastUpdated>Last Updated: {__BUILD_TIME__}</Styled.LastUpdated> */}

                <Styled.SearchProjectWrapper>
                    <input
                        type="text"
                        value={searchedProject}
                        onChange={handleInputChange}
                        placeholder="search your project here"
                    />
                    <div className="searchIconWrapper">
                        <CiSearch size={20} className="icon" />
                    </div>
                    {searchedProject.length > 0 &&
                        <div className="clearIconWrapper" onClick={() => setSearchedProject("")}>
                            <MdClear size={20} className="icon clear" />
                        </div>
                    }
                </Styled.SearchProjectWrapper>

                <Styled.Heading>List of Projects</Styled.Heading>

                <Styled.ProjectList reversed>
                    {filteredProjects.length === 0 ? (
                        <li style={{ color: 'red', listStyle: 'none' }}>No project found</li>
                    ) : (
                        filteredProjects.map((item) => (
                            <li key={item.name}>
                                <NavLink to={item.link}>{item.name}</NavLink>
                            </li>
                        ))
                    )}
                </Styled.ProjectList>

            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default Home

