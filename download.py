from pytube import YouTube
print("Python Youtube Downloader")
yt = YouTube(input('put a link here: '))
yt.streams.filter(progressive=True, file_extension='mp4').order_by('resolution').desc().first().download()