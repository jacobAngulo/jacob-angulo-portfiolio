import React from 'react';
import '../content/content-display.css'

const ContentDisplay = {
        MainContent: function() {
            return (
                <div className='main-content'>
                <pre>
                    <code>creating</code>
                    <code>a</code>
                    <code>modern</code>
                    <code>web</code>
                </pre>
            </div>
            )
        },
        OerBookr: function() {
            return(
                <h1>oer bookr</h1>
            )
        },
        TodoApp: function() {
            return (
                <h1>todo app</h1>
            )
        },
        InstaClone: function() {
            return(
                <h1>insta clone</h1>
            )
        }
}


export default ContentDisplay