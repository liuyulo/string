main.pdf: main.tex
	docker run --rm -it -v "$$(pwd):/workdir" texlive/texlive lualatex $?
