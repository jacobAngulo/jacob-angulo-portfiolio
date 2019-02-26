import React from 'react';
import '../content/content-display.css'

const ContentDisplay = {
        MainContent: function() {
            return (
                <div className='main-content'>
                <pre>
                    <code>creating a modern web</code>
                </pre>
            </div>
            )
        },
        OerBookr: function() {
            return(
                <pre>
                    <code>oer bookr</code>
                </pre>
            )
        },
        TodoApp: function() {
            return (
                <pre>
                    <code>todo app</code>
                </pre>
            )
        },
        InstaClone: function() {
            return(
                <pre>
                    <code>insta clone</code>
                </pre>
            )
        }
}


export default ContentDisplay