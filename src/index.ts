type ImageSize = 8 | 16 | 24 | 32 | 48 | 64 | 128 | 256 | 512 | 1024 | 2048

interface Image {
    name: string;
    size: ImageSize
}

const image: Image = {
    name: 'example.png',
    size: 64,
}