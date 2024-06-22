import { serve } from 'bun';

serve({
    fetch(request) {
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello bhai', { status: 200 })
        }
        else if (url.pathname === '/ice-tea') {
            return new Response('Hello bhai chai piyega', { status: 200 })
        }
        else {
            return new Response('404 Port not found', { status: 404 })
        }
    },
    Port: 3000,
    hostName: ''
})

