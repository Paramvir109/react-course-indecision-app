import React from 'react'

const Action = (props) => {//Single return statements so use es6 syntax
    return(
        <div>
            <button className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
            What should I do?
            </button>
        </div>
    )
}
export default Action //Or we can make inline export default but then Action name has to be removed and in chrom dev console
                            //it will be shown as Unknown