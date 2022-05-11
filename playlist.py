#https://www.youtube.com/playlist?list=PLutiWwcCdAw0AJd5osbs6L4y0TOontBMl
from pytube import YouTube
from pytube import Playlist
import os
import moviepy.editor as mp
import re
playlist = Playlist("https://www.youtube.com/playlist?list=PLutiWwcCdAw0AJd5osbs6L4y0TOontBMl")
for url in playlist:
   YouTube(url).streams.filter(only_audio=True).first().download()