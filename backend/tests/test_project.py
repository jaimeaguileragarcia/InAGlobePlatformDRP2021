# test_with_pytest.py
import pytest

from backend.models.project_model import Project
from backend.database_config.database import DB

def test_add_project(client):
    project = Project()
    project.name = "Eco Warriors"
    project.description = "This is a cool project"
    project.status = "Available"

    DB.add(project)

    query_result = Project.query.get(project.id)

    assert query_result.name == project.name
    assert query_result.description == project.description
    assert query_result.status == project.status


def test_delete_project(client):
    project = Project.query.filter(Project.name == "Eco Warriors").first()
    size_before = len(Project.query.all())
    DB.delete(project)

    size_after = len(Project.query.all())
    assert size_before == (size_after + 1)

