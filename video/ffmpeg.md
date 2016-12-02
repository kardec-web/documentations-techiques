https://www.virag.si/2012/01/web-video-encoding-tutorial-with-ffmpeg-0-9/
https://www.virag.si/2012/01/webm-web-video-encoding-tutorial-with-ffmpeg-0-9/

Resolution	Bitrate	Approximate size of 10min video
320p (mobile)	180 kbit/s	~13 MB
360p	300 kbit/s	~22MB
480p	500 kbit/s	~37MB
576p (PAL)	850 kbit/s	~63MB
720p	1000 kbit/s	~75 MB

-i [input file] | this specifies the name of input file
-codec:v libx264 | tells FFmpeg to encode video to H.264 using libx264 library
-profile:v high | sets H.264 profile to “High” as per Step 2. Other valid options are baseline, main
-preset slow | sets encoding preset for x264 – slower presets give more quality at same bitrate, but need more time to encode. “slow” is a good balance between encoding time and quality. Other valid options are: ultrafast, superfast, veryfast, faster, fast, medium, slow, slower, veryslow, placebo (never use this one)
-b:v | sets video bitrate in bits/s
-maxrate and -bufsize | forces libx264 to build video in a way, that it could be streamed over 500kbit/s line considering device buffer of 1000kbits. Very useful for web - setting this to bitrate and 2x bitrate gives good results.
-vf scale | applies “scale” filter, which resizes video to desired resolution. “720:480” would resize video to 720x480, “-1” means “resize so the aspect ratio is same.” Usually you set only height of the video, so for 380p you set “scale=-1:380”, for 720p “scale=-1:720” etc.
-threads 0 | tells libx264 to choose optimal number of threads to encode, which will make sure all your processor cores in the computer are used
-codec:a libfdk_aac | tells FFmpeg to encode audio to AAC using libfdk-aac library
-b:a | sets audio bitrate in bits/s
-pass [1 2] | tells FFmpeg to process video in multiple passes and sets the current pass
-an | disables audio, audio processing has no effect on first pass so it’s best to disable it to not waste CPU

ffmpeg -i input_file.avi -codec:v libx264 -profile:v main -preset slow -b:v 500k -maxrate 850k -bufsize 1000k -threads 0 -codec:a libfdk_aac -b:a 128k output_file.mp4