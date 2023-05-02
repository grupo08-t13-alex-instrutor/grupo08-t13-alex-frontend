import React from "react";
import { ContainerOptions, ItemOptions } from "./styled";

const Options = ({ options, filter, id, setState }: any) => {
    const DOMRect = document.getElementById(id)?.getBoundingClientRect();
    
    return(
        <ContainerOptions width={ DOMRect!.width } top={ DOMRect!.bottom }>
            <ul>
                {
                    filter ? 
                        filter.map( (option: string, index: number) => {
                             
                            return(
                                <React.Fragment key={index}>
                                    <ItemOptions>
                                        <p onClick={ () => setState( option ) }>{ option }</p>
                                    </ItemOptions>
                                </React.Fragment>
                            )
                        })
                    : 
                        options ? options.map( (option: string, index: number) => {    
                            return(
                                <React.Fragment key={index}>
                                    <ItemOptions>
                                        <p onClick={ () => setState( option ) }>{ option }</p>
                                    </ItemOptions>
                                </React.Fragment>
                            )
                        }) : <></>
                    } 
            </ul>
        </ContainerOptions>
    )
}

export { Options };