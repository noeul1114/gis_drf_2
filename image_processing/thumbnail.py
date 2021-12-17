from io import BytesIO

from PIL import Image


def generate_thumbnail(input_image):
    img = Image.open(input_image)

    width, height = img.size
    ratio = height / width
    pixel = 250

    img = img.convert("RGB")
    img.thumbnail((pixel, round(ratio * pixel)))

    output = BytesIO()
    img.save(output, format='JPEG', quality=95)
    output.seek(0)

    return output
