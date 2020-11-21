import {Component} from 'react'

export default function Article ({article, isOpen, onButtonClick}) {
        const content = isOpen && <section className='card-text'>{article.content}</section>
        return (
            <div className='card mx-auto' >
                <div className='card-header'>
                    <h2>
                        {article.title}
                        <button
                            onClick={onButtonClick}
                            className='btn btn-primary btn-lg float-right'>
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    <section className='card-subtitle text-muted'>{(new Date(article.date)).toDateString()}</section>
                    {content}
                </div>
            </div>
        )
}
