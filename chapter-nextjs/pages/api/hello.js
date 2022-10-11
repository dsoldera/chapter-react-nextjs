
export default async function handler(req, res) {

    await res.revalidate('/home')
    return res.json({ revalidated: true })
    //return res.status(200).json({ name: 'Hello, world!' });
};